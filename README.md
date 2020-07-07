## `Testing Recoil library for state management`

Key words from Recoil library that used in this app:

- RecoilRoot: Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks.
- Atom: Represents state in Recoil. The atom() function returns a writeable RecoilState object.

  Most often, you'll use the following hooks to interact with atoms:

  - useRecoilState(): Use this hook when you intend on both reading and writing to the atom. This hook subscribes the component to the atom.
  - useRecoilValue(): Use this hook when you intend on only reading the atom. This hook subscribes the component to the atom.

- Selector: A piece of derived state. It is as a pure function that accept Atoms or other Selectors as a parameters. It lets us build dynamic data that depends on other data.

`Netlify Link`: https://review-with-recoil.netlify.app/
