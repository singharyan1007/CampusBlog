let ul = document.querySelector(".links-container");
//if user is logged in
ul.innerHTML += `  <li class="link-item"><a href="/admin" class="link">Dashboard</a></li>
                 <li class="link-item"><a href="#" class="link">Logout</a></li>

`;
// else
ul.innerHTML += ` <li class="link-item"><a href="/admin" class="link">login</a></li>
`;
