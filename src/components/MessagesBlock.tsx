import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useMessagesById } from "src/api/hooks/useMessage";
import { useActiveUserContext } from "./Layout";
import cn from "clsx";

export default function MessageBlock({
  conversationId,
  contactName,
  onClick,
}: {
  conversationId: number;
  contactName: string;
  isHidden: boolean;
  onClick: () => void;
}) {
  const { data } = useMessagesById(conversationId);
  const { activeUser } = useActiveUserContext();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const [newMessages, setNewMessages] = useState<FieldValues[]>([]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const message = {
      conversationId: conversationId,
      timestamp: Date.now(),
      authorId: activeUser.id,
      body: data.message,
    };
    newMessages.push(message);
    reset();
  };

  useEffect(() => {
    setNewMessages([]);
  }, [conversationId, activeUser]);

  return (
    <div className="relative h-full md:shadow-lg md:p-5 md:rouned-lg overflow-hidden">
      <button
        aria-label="Close"
        className="md:hidden absolute top-2 right-2 btn btn-square btn-xs "
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="h-full flex flex-col space-y-2">
        <div className="border-b text-secondary text-base font-semibold md:pt-7 pb-2.5 md:pb-5 px-2 md:px-5 flex space-x-3">
          <img
            src={`/assets/${contactName.toLowerCase()}.png`}
            className="h-[52px] my-auto"
          />
          <p className="my-auto">{contactName}</p>
        </div>
        <div className="grid grid-cols-1 gap-3 content-end h-full">
          {data?.map((message) => (
            <div
              key={`conversation-${conversationId}-message-${message.id}`}
              className={cn(
                activeUser.id === message.authorId
                  ? "grid justify-items-end"
                  : "grid justify-items-start"
              )}
            >
              <p
                className={cn(
                  "chat-bubble text-sm w-3/5",
                  activeUser.id === message.authorId
                    ? "chat-bubble-accent"
                    : "chat-bubble-secondary"
                )}
              >
                {message.body}
              </p>
              <p className="text-[10px] float-right">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                }).format(message.timestamp)}
              </p>
            </div>
          ))}
          {newMessages?.map((message, index) => (
            <div
              key={`conversation-${conversationId}-new-message-${index}`}
              className={cn(
                activeUser.id === message.authorId
                  ? "grid justify-items-end"
                  : "grid justify-items-start"
              )}
            >
              <p
                className={cn(
                  "chat-bubble text-sm w-fit",
                  activeUser.id === message.authorId
                    ? "chat-bubble-accent"
                    : "chat-bubble-secondary"
                )}
              >
                {message.body}
              </p>
              <p className="text-[10px] float-right">
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                }).format(message.timestamp)}
              </p>
            </div>
          ))}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex space-x-3"
          >
            <input
              className="w-full flex rounded-lg bg-neutral-content text-neutral px-2 text-sm shadow-md"
              id="message"
              {...register("message", { required: "This field is required" })}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              aria-label="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
