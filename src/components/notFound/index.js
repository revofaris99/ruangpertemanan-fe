import React from "react";
import "../../css/notFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <section className="page_404 flex h-screen items-center justify-center">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link
                    to={"/ruang/v1/home"}
                    className="link_404 rounded-lg shadow-lg overflow-hidden hover:shadow-blue-300"
                  >
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
