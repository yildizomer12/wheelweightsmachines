import { NextPage } from 'next';

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">
        {statusCode ? `${statusCode} Error` : 'An error occurred'}
      </h1>
      <p className="mb-4">
        {statusCode
          ? `A ${statusCode} error occurred on server`
          : 'An error occurred on client'}
      </p>
      <a
        href="/"
        className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
      >
        Go to Home
      </a>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
