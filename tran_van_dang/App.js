import { Provider } from "react-redux";
import Router from "./src/navigation";
import store from "./src/redux/store";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  );
}
