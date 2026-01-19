# Developer Technical Exercise

The purpose of this exercise is to assess candidates on equal parts data
handling, visualisation, and knowledge of appropriate tooling.

## Brief

Our client, Acme, has supplied cumulative carbon emissions data in CSV
format.

We are to produce a Next.js application that will clearly display these
emissions. The project has been initialised with
[shadcn-ui](https://ui.shadcn.com/).

### Steps

1. Transform the data so that it is monthly, not cumulative.
2. Display the data on a graph with the X-axis being months, and the
   Y-axis being carbon emitted that week in tCO2e (a standard unit).
3. The data comprises 3 years, each year should be toggleable on the
   graph. This state should be stored in the URL search params, e.g.
   `?q=2023,2024` only displays data for years `2023` and `2024`.

### Considerations

- Data transformation should be done programatically, therefore no excel
  or similar tools are to be used.
- Feel free to add any additional components from
  [shadcn-ui](https://ui.shadcn.com/).
- Feel free to use any additional libraries as you see fit.
- The type and style of the graph should be such that it conveys meaning
  to the client.
- The client would like their name displayed in the top centre, with
  appropriate padding.
- Please do not create a full user experience, with authentication etc.
- The client will be viewing on a desktop. No need to make it responsive.
- Please prepare a short walkthrough of your code, demonstrating your
  thought process, tools used, any challenges, and any other relevant
  information. This should be no more than 5 minutes.
- An hour, maybe two, is a reasonable amount of time to spend on this. It
  is not our intention that candidates lose valuable free time completing
  this exercise. If in doubt, call a halt to the work and present what
  you have.

## Getting started

Please create a private fork of this repository:

1. Create a bare clone of the repository.
   (This is temporary and will be removed).

```
git clone --bare git@github.com:EnergiseLtd/technical-exercise-2601.git
```

2. [Create a new private repository on GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)
   and name it `technical-exercise-2601`.

3. [Add `mshaugh` as a collaborator to your new private repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

4. Mirror-push your bare clone to your new `technical-exercise-2601`
   repository.

```
cd technical-exercise-2601.git
git push --mirror git@github.com:<your_username>/technical-exercise-2601.git
```

5. Remove the temporary local repository you created in step 1.

```
cd ..
rm -rf technical-exercise-2601.git
```

6. You can now clone your `technical-exercise-2601` repository on your
   machine.

```
git clone git@github.com:<your_username>/technical-exercise-2601.git
```

### Best of luck!
