# Contributing to Auto-Subliminal

1. [Getting Involved](#getting-involved)
2. [How To Report Bugs](#how-to-report-bugs)
3. [Tips For Submitting Code](#tips-for-submitting-code)

## Getting Involved

There are a number of ways to get involved with the development of Auto-Subliminal. Even if you've never contributed code to an Open Source project before, we're always looking for help identifying bugs, cleaning up code, writing documentation and testing.

The goal of this guide is to provide the best way to contribute to the official Auto-Subliminal repository.

## How to Report Bugs

### Make sure it is a Auto-Subliminal bug

Many bugs reported are actually issues with the user mis-understanding of how something works and can often be fixed by just changing some settings to fit the users needs.

### Try the latest version of Auto-Subliminal

Bugs in old versions of Auto-Subliminal may have already been fixed. In order to avoid reporting known issues, make sure you are always testing against the latest version. Also, we put new code in the `development` branch first before pushing down to the `master` branch.

### Reporting the issue

If the above steps fail and you are sure its a bug, issues are tracked in the Auto-Subliminal [issue tracker](https://github.com/h3llrais3r/Auto-Subliminal).

Please follow these guidelines before reporting a bug:

1. **Update to the latest version** - Check if you can reproduce the issue with the latest version from the `development` branch.

2. **Use the search on Auto-Subliminal issues** - Check if the issue has already been reported. If yes, please comment on the existing issue.

3. **Provide the steps to reproduce the problem** - Please provide as much details as possible, e.g. debug log files (obfuscate apikey/passwords), browser and operating system versions, how you started Auto-Subliminal, and of course the steps to reproduce the problem.


## Tips For Submitting Code

### Code

**NEVER write your patches to the 'master' branch**

**ALWAYS use a 'topic' branch**

Use a name that identifies the branch and feature/issue at first glance.  
Also make note of any issue number in the pull commit so we know what you are solving.

### Pull requests

[Pull requests](https://help.github.com/articles/using-pull-requests) are welcome and the preferred way of accepting code contributions.

Please follow these guidelines before sending a pull request:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork, and configure the remotes (if not already done):

```bash
   # Clone your fork of the repo into the current directory in terminal
   git clone https://github.com/<your username>/Auto-Subliminal.git
   # Navigate to the newly cloned directory
   cd Auto-Subliminal
   # Assign the original repo to a remote called 'upstream'
   git remote add upstream https://github.com/h3llrais3r/Auto-Subliminal.git
```

2. Update your fork to the latest upstream version.

```bash
   # fetch upstream changes
   git fetch upstream
   # Make sure you are on your 'master' branch
   git checkout master
   # Merge upstream changes
   git merge upstream/master
   # Switch to the development branch
   git checkout development
   # Pull down any updates
   git pull
```

3. Use the `development` branch as base for your branch. Create a 'topic' branch for your work. We will not merge your 'development' branch, or your 'master' branch, only 'topic' branches, coming from `development` are merged.

```bash
   git checkout -b <topic-branch-name> development
```

4. Follow the coding conventions of the original repository.

5. Keep your commits as autonomous as possible, i.e. create a new commit for every single bug fix or feature added.

6. Always add meaningful commit messages. We should not have to guess at what your code is supposed to do. Use git's [interactive rebase](https://help.github.com/articles/interactive-rebase) feature to tidy up your commits before making them public.

7. Push your 'topic' branch up to your fork.

```bash
   git push origin <topic-branch-name>
```

8. [Open a Pull Request](https://help.github.com/articles/using-pull-requests) with a clear title and description. Create one PR per feature. If you want multiple features, create multiple PR's.
