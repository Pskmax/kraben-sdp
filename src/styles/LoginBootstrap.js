import React from "react";

function LoginBootstrap() {
    return (
        <div className="mt-5 mx-auto p-3" style={{ background: "#cee", width: 700 }}>
            <form class="row g-3">
                <div class="col-12">
                    <label for="inputUsername" class="form-label">Username/Email</label>
                    <input type="text" class="form-control" id="inputUsername" />
                </div>
                <div class="col-12">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginBootstrap