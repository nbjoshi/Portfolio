// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "@octokit/core";

type GithubCommit = {
  commit: {
    message: string;
  };
};

type GithubResponse = GithubCommit[];

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export default async function getCommits(
  req: NextApiRequest,
  res: NextApiResponse<{ response: GithubResponse } | { error: string }>,
) {
  try {
    const response = await octokit.request('GET /repos/nbjoshi/Portfolio/commits', {
      owner: 'nbjoshi',
      repo: 'portfolio',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    const commits: GithubResponse = response.data as GithubResponse;
    res.status(200).json({ response: commits });
  } catch (error) {
    console.error('Error fetching GitHub commits:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub commits' });
  }
}
