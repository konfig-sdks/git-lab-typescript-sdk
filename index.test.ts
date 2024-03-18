import { GitLab } from "./index";

describe("git-lab-typescript-sdk", () => {
    it("initialize client", async () => {
        const gitlab = new GitLab({
            apiKey: "API_KEY",
        });
    });
});
