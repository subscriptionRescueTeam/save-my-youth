import { atom, selector } from 'recoil';

type userAtomType = {
  likeCount: number;
  storeName: string;
};

const userAtom = atom<userAtomType>({
  key: 'userAtom',
  default: {
    likeCount: 0,
    storeName: '',
  },
});

const userSelector = selector({
  key: 'userSelector',
  get: ({ get }) => {
    const { storeName } = get(userAtom);
    const data = storeName;
    return data;
  },
});

export { userSelector, userAtom };
