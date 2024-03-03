import React from 'react'

export default function VerticalNavbar() {
  return (
  <>
  <div className='verticalnavbar'>
<div class="container-fluid ">
    <div class="row flex-nowrap">
        <div class="verticalnavbar col-auto col-md-30 col-xl-30 px-sm-3 px-2 bg-light ">
              
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0 text-dark">
                            <i class="fs-4 bi-house-fill"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark my-2 w-20">
                        <i class="bi bi-file-earmark-play-fill"></i><span class="ms-1 d-none d-sm-inline">Shorts</span> </a>
                        <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle w-20 text-dark">
                        <i class="bi bi-youtube"></i> <span class="ms-1 d-none d-sm-inline">Subscriptions</span></a>
                    </li>
              
                    
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark ">
                        <i class="bi bi-person-video"></i><span class="ms-1 d-none d-sm-inline">Your Channel</span></a>
                       
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark ">
                        <i class="bi bi-clock-history"></i> <span class="ms-1 d-none d-sm-inline">History</span></a>
                       
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark ">
                        <i class="bi bi-play-btn"></i>  <span class="ms-1 d-none d-sm-inline">Your Videos</span></a>
                       
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark ">
                        <i class="bi bi-stopwatch-fill"></i>  <span class="ms-1 d-none d-sm-inline">Watch Later</span></a>
                       
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle text-dark ">
                        <i class="bi bi-hand-thumbs-up"></i> <span class="ms-1 d-none d-sm-inline">Liked Videos</span></a>
                       
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
              
               
            </div>
        </div>
      </div>
      </div>
</>
  )
}
