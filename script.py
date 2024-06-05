import os
from github import Github
import openai

# Initialize GitHub client
gh_token = os.getenv('GH_TOKEN')
g = Github(gh_token)
repo = g.get_repo("Bhejjaa/code")  # replace with your username/repo

# Example: List all issues
issues = repo.get_issues(state='open')
for issue in issues:
    print(issue)

# Initialize OpenAI client
openai.api_key = os.getenv('OPENAI_API_KEY')

# Example: Use ChatGPT to summarize an issue
if issues.totalCount > 0:
    issue = issues[0]
    response = openai.Completion.create(
        engine="davinci",
        prompt=f"Summarize this GitHub issue:\n\nTitle: {issue.title}\n\nBody: {issue.body}",
        max_tokens=100
    )
    print(response.choices[0].text.strip())
