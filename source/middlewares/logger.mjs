// Modules
import Chalk from "chalk";

// Middleware
export const logger = async (ctx, next) => {
  const { method, originalUrl } = ctx;

  // Incoming Request
  // eslint-disable-next-line no-console
  console.log(`${Chalk.blue("↙")} ${method} ${originalUrl}`);

  const requestStartedAt = Date.now();

  let error;
  let requestFulfilledAt;

  try {
    await next();
  } catch (exception) {
    error = exception;
  } finally {
    requestFulfilledAt = Date.now();

    const { status } = ctx;

    let chalkColor = "white";

    if (status >= 100 && status < 200) {
      chalkColor = "green";
    }
    if (status >= 200 && status < 300) {
      chalkColor = "green";
    }
    if (status >= 300 && status < 400) {
      chalkColor = "cyan";
    }
    if (status >= 400 && status < 500) {
      chalkColor = "yellow";
    }
    if (status >= 500) {
      chalkColor = "red";
    }

    const icon = error ? "⨉" : "↗";

    const formattedIcon = Chalk[chalkColor](icon);
    const formattedStatus = Chalk[chalkColor](status);

    const responseTime = requestFulfilledAt - requestStartedAt;

    // Outgoing Response
    // eslint-disable-next-line no-console
    console.log(
      `${formattedIcon} ${method} ${originalUrl} ${formattedStatus} ${responseTime}ms`,
    );
  }
};
