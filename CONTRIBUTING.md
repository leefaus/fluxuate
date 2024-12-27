# Contributing to Fluxuate

First off, thank you for considering contributing to Fluxuate! It's people like you that make Fluxuate such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [project maintainers].

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. Create an issue and provide the following information:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Follow the Ruby styleguide
* Include thoughtfully-worded, well-structured tests
* Document new code
* End all files with a newline

## Development Process

1. Fork the repo
2. Create a new branch from `release`
3. Make your changes
4. Run the test suite
5. Push your branch and submit a pull request
6. Wait for review and address any comments

## Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/fluxuate.git

# Add upstream remote
git remote add upstream https://github.com/leefaus/fluxuate.git

# Install dependencies
bundle install
npm install

# Setup database
rails db:setup

# Run tests
rails test
```

## Style Guides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### Ruby Style Guide

* Follow the [Ruby Style Guide](https://github.com/rubocop/ruby-style-guide)
* Run RuboCop before submitting PRs

### JavaScript Style Guide

* Use modern ES6+ features
* Follow the project's ESLint configuration

## Additional Notes

### Issue and Pull Request Labels

* `bug` - confirmed bugs or reports likely to be bugs
* `enhancement` - new feature or request
* `documentation` - documentation improvements
* `good first issue` - good for newcomers
* `help wanted` - extra attention is needed
