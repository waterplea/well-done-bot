import { Probot } from "probot";

export = (app: Probot) => {
  app.on("pull_request.merged", async (context) => {
    const comment = context.issue({
      body: "[!['Well done'](https://yt-embed.herokuapp.com/embed?v=tAhJMRk2vHA)](https://www.youtube.com/watch?v=tAhJMRk2vHA 'Well done')",
    });

    await context.octokit.issues.createComment(comment);
  });
};
