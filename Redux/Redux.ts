// Create a Slice, it will tell what to do with state
import { createSlice } from '@reduxjs/toolkit';

interface Consumer {
  phone: string;
}
const initConsumer: Consumer = {
  phone: '',
};

export const consumerSlice = createSlice({
  name: 'consumer',
  initialState: initConsumer,
  reducers: {
    updatePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { updatePhone } = consumerSlice.actions;

export default consumerSlice.reducer;

// Slice can have arrays:
interface product {
  productUUID: string;
  merchantName: string;
}

interface cardDetails {
  CardUUID: string;
  Status: string;
  CardType: string;
  Last4: number;
}

interface rewards {
  totalRewards: string;
}

interface productAccount {
  productAccountUUID: string;
  product: Array<product>;
  cardDetails: Array<cardDetails>;
  rewards: Array<rewards>;
  balance: number;
  status: string;
  cancelReason: string;
}

interface ProductAccounts {
  productAccounts: Array<productAccount>;
}

const initProductAccounts: ProductAccounts = {
  productAccounts: [],
};

export const productAccountSlice = createSlice({
  name: 'productaccounts',
  initialState: initProductAccounts,
  reducers: {
    updateProductAccount: (state, action) => {
      state.productAccounts = action.payload.productAccounts;
    },
  },
});

export const { updateProductAccount } = productAccountSlice.actions;

export default productAccountSlice.reducer;

// 2. Create a store where data will be stored and configured:
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import consumerReducer from './consumerSlice';

export const store = configureStore({
  reducer: {
    consumer: consumerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

//3. Crate Hooks.ts:
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//4. Import store to the app:
import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { AuthProvider } from '../hooks/useAuth';
import { store } from '../app/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <AuthProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </AuthProvider>
    </>
  );
}

//5. Now you can extract states using useAppSelector
const phone = useAppSelector((state) => state.consumer.phone);

// You can create selector functiona that will return objects
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const selectPhone = (state: RootState) => state.consumer.phone;

export const selectConsumerPhoneView = createSelector(
  [selectPhone],
  (phone) => {
    return [
      {
        label: 'Phone',
        value: phone,
        editable: true,
      },
    ];
  }
);

// Then you can use that in other class like
import { selectConsumerPhoneView } from '../app/consumerSelectors';
const phone = useSelector(selectConsumerPhoneView);

// OnClick example:
function App () {
  const dispatch = useAppDispatch();

  fucntion handleClick () {
    dispatch(updatePhone());
  }
}
<button onClick = ${handleClick}>
