import Header from "../component/container/Header";
import Footer from "component/container/Footer";

const Body = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="jumbotron bg-transparent">
            <h1 class="display-4">Page not Found!</h1>
            <p class="lead">
              The page you are looking for does not exist. You may have mistyped
              the address or the page may have moved.
            </p>
            <hr class="my-4" />
            <p>
              Please check the URL in the address bar and try again. If you are
              still having problems, please contact us.
            </p>
            <a class="btn btn-primary btn-lg" href="/" role="button">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default NotFound;
