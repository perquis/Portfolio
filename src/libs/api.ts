export const headers = {
  "content-type": "application/json",
};

export const withErrorHandling =
  <T, U>(fn: (request: T) => Promise<U>) =>
  async (request: T) => {
    try {
      return await fn(request);
    } catch (error) {
      if (error instanceof Error)
        return new Response(
          JSON.stringify({
            success: false,
            message: error.message,
          }),
          { headers, status: 400 },
        );

      return new Response(
        JSON.stringify({
          success: false,
          message: "Something went wrong...",
        }),
        {
          headers,
          status: 500,
        },
      );
    }
  };
