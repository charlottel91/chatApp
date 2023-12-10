import { useState, type ReactElement } from "react";
import { prefetchUsers, useUsers } from "src/api/hooks/useUser";
import { GetStaticProps } from "next";
import { QueryClient, dehydrate } from "react-query";
import { User } from "src/types/user";
import { useConversationsBySender } from "src/api/hooks/useConversations";
import { getLoggedUserId } from "src/utils/getLoggedUserId";
import ConversationList from "src/components/ConversationsList";
import MessageBlock from "src/components/MessagesBlock";
import { useActiveUserContext } from "src/components/Layout";
import cn from "clsx";

const Home = ({ users }: { users: User[] }): ReactElement => {
  const { activeUser, setActiveUser } = useActiveUserContext();
  const { data: conversations, isLoading } = useConversationsBySender(
    activeUser.id ?? getLoggedUserId(),
  );
  const { data: allUsers } = useUsers({ initialData: users });
  const [activeConversation, setActiveConversation] = useState<number | null>(
    null,
  );
  const [contactName, setContactName] = useState<string | null>(null);
  const [hiddenConversations, setHiddenConversations] = useState(false);

  const handleClickConversation = (id: number, name: string) => {
    setActiveConversation(id);
    setContactName(name);
    setHiddenConversations(true);
  };

  const handleChangeSelect = (id: number) => {
    setActiveConversation(null);
    setActiveUser(users.filter((user) => user.id === id)[0]);
  };

  const onCloseMessengers = () => {
    setActiveConversation(null);
    setContactName(null);
    setHiddenConversations(false);
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-10 h-full items-center md:bg-none p-5 md:p-10">
        {conversations && allUsers && (
          <ConversationList
            conversations={conversations}
            onClick={handleClickConversation}
            isHidden={hiddenConversations}
            allUsers={allUsers}
            onChange={handleChangeSelect}
            isLoading={isLoading}
          />
        )}

        <div
          className={cn(
            "col-span-3 lg:col-span-4 rounded-lg h-full rounded-lg",
            hiddenConversations ? "block animate-slideLeft" : "hidden",
          )}
        >
          {activeConversation && !!contactName && (
            <MessageBlock
              conversationId={activeConversation}
              contactName={contactName}
              isHidden={!hiddenConversations}
              onClick={onCloseMessengers}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  let users = null;

  try {
    const allUsers = await prefetchUsers(queryClient);
    users = allUsers;
  } catch (error) {
    return { notFound: true };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      users,
    },
  };
};

export default Home;
