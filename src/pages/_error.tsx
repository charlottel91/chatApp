import React from "react";

const ErrorPage = ({ statusCode }: { statusCode: string }) => {
  return (
    <div className='flex flex-col justify-center text-center h-[100vh] space-y-4'>
      <img src='https://media.giphy.com/media/H6c3xjdHEQzqGDj5dd/giphy.gif' alt="loading..." className="w-2/5 mx-auto" />
      <h1 className="text-neutral font-extrabold text-lg md:text-2xl lg:text-4xl px-5">
      I'm sorry...
      <br />
        {statusCode

          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </h1>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err } : { res: any, err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
