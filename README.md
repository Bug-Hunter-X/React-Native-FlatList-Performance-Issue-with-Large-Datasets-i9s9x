# React Native FlatList Performance Bug

This repository demonstrates a common performance issue encountered when using the FlatList component in React Native with a large dataset, and presents a solution.

## Problem

When updating the data in a FlatList with many items, standard React state updates can cause performance problems. This often results in slow scrolling, janky animations, or even app crashes.  The key issue lies in inefficient data updates causing unnecessary re-renders.

## Solution

The provided solution focuses on two key areas:

1.  **Efficient Key Extraction:** Using the `keyExtractor` prop with a unique identifier for each item is crucial. This allows React Native to efficiently update the list by only re-rendering changed items.
2.  **Optimized Data Updates:**  Optimizing data manipulation outside of the render cycle helps prevent unnecessary re-renders. This is often done using `useMemo` or similar optimization techniques.

## Running the example:

1. Clone the repo: `git clone <repo_url>`
2. Navigate to the directory: `cd react-native-flatlist-bug`
3. Install dependencies: `npm install` or `yarn install`
4. Run the app: `npx react-native run-android` or `npx react-native run-ios`