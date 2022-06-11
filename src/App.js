import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Admin from "./components/Admin";
import FeatureProducts from "./components/FeatureProducts";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewProducts from "./components/NewProducts";
import NotPageFound from "./components/NotPageFound";
import OrderSummary from "./components/OrderSummary";
import Products from "./components/Products";
import Profile from "./components/Profile";
import UserDetail from "./components/UserDetail";
import Users from "./components/Users";
import {AuthProvider} from "./components/Auth";
import Login from "./components/Login";
import Middleware from "./components/Middleware";

function App() {
  return (
    <AuthProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<FeatureProducts />} />
          <Route path="feature" element={<FeatureProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/users/admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<Middleware><Profile /></Middleware>} />
        <Route path="login" element={<Login />} />

        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
