import React from "react";

function SignUpBootstrap() {
    return (
        <div className="mt-3 mx-auto p-3" style={{ background: "#cee", width: 700 }}>
            <form class="row g-3">
                <div class="col-12">
                    <label for="inputUsername" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputUsername" />
                </div>
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="xxx@yyy.zzz" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" />
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-md-6">
                    <label for="inputCity" class="form-label">Province</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">District</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>จังหวัด A</option>
                        <option>จังหวัด B</option>
                        <option>จังหวัด C</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Postal Code</label>
                    <input type="text" class="form-control" id="inputZip" />
                </div>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-3 pt-3">Account Type</legend>
                    <div class="col-auto">
                        <br/>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                                <label class="form-check-label" for="gridRadios1">
                                    Buyer
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                <label class="form-check-label" for="gridRadios2">
                                    Seller
                                </label>
                        </div>
                    </div>
                </fieldset>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpBootstrap