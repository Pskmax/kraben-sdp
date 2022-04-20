import React from "react";

function SearchBootstrap() {
    return (
        <div class="input-group w-50">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <button type="button" class="btn btn-primary">search</button>
        </div>
    )
}

export default SearchBootstrap