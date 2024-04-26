class l_Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
		<div class="header-left">
			<div class="menu-icon dw dw-menu"></div>
			<div class="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
			<div class="header-search">
				<!-- //search bar take from calender.html -->
			</div>
		</div>
		<div class="header-right">
			<div class="dashboard-setting user-notification">
				<div class="dropdown">
					<!-- <a class="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
						<i class="dw dw-settings2"></i>
					</a> -->
				</div>
			</div>
			<div class="user-notification">
				<div class="dropdown">
					<a class="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
						<i class="icon-copy dw dw-notification"></i>
						<span class="badge notification-active"></span>
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<div class="notification-list mx-h-350 customscroll">
							<ul>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/img.jpg" alt="">
										<h3>Rajat</h3>
										<p>Next hearing on 24 september 2023. BE Ready!</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/photo1.jpg" alt="">
										<h3>Prerna</h3>
										<p>Next hearing on 28 september 2023. BE Ready!</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/photo2.jpg" alt="">
										<h3>Keshav</h3>
										<p>Next hearing on 30 september 2023. BE Ready!</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/photo3.jpg" alt="">
										<h3>Harshit</h3>
										<p>Next hearing on 4 october 2023. BE Ready!</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/photo4.jpg" alt="">
										<h3>Prateek</h3>
										<p>Next hearing on 8 october 2023. BE Ready!</p>
									</a>
								</li>
								<li>
									<a href="#">
										<img src="/user_interface/vendors/images/img.jpg" alt="">
										<h3>vansh</h3>
										<p>Next hearing on 24 october 2023. BE Ready!</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="user-info-dropdown">
				<div class="dropdown">
					<a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
						<span class="user-icon">
							<img src="/user_interface/vendors/images/photo1.jpg" alt="">
						</span>
						<span class="user-name">K.D. Pathak</span>
					</a>
					<div class="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
						<!-- <a class="dropdown-item" href="/user_interface/profile.html"><i class="dw dw-user1"></i> Profile</a>
						<a class="dropdown-item" href="/user_interface/profile.html"><i class="dw dw-settings2"></i> Setting</a> -->
						<!-- <a class="dropdown-item" href="/user_interface/faq.html"><i class="dw dw-key"></i> Help</a> -->
						<a class="dropdown-item" href="/pages/login.html"><i class="dw dw-logout"></i> Log Out</a>
						<a class="dropdown-item" href="/user_interface/subsmodel/index.html"><i class="dw dw-crown"></i>Ultimate</a>
					</div>
				</div>
			</div>
			<div class="github-link">
				<!-- <a href="https://github.com/dropways/deskapp" target="_blank"><img src="vendors/images/github.svg" alt=""></a> -->
			</div>
		</div>
	</div>

	<div class="right-sidebar">
		<div class="sidebar-title">
			<h3 class="weight-600 font-16 text-blue">
				Layout Settings
				<span class="btn-block font-weight-400 font-12">User Interface Settings</span>
			</h3>
			<div class="close-sidebar" data-toggle="right-sidebar-close">
				<i class="icon-copy ion-close-round"></i>
			</div>
		</div>
		<div class="right-sidebar-body customscroll">
			<div class="right-sidebar-body-content">
				<h4 class="weight-600 font-18 pb-10">Header Background</h4>
				<div class="sidebar-btn-group pb-30 mb-10">
					<a href="javascript:void(0);" class="btn btn-outline-primary header-white active">White</a>
					<a href="javascript:void(0);" class="btn btn-outline-primary header-dark">Dark</a>
				</div>

				<h4 class="weight-600 font-18 pb-10">Sidebar Background</h4>
				<div class="sidebar-btn-group pb-30 mb-10">
					<a href="javascript:void(0);" class="btn btn-outline-primary sidebar-light ">White</a>
					<a href="javascript:void(0);" class="btn btn-outline-primary sidebar-dark active">Dark</a>
				</div>

				<h4 class="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
				<div class="sidebar-radio-group pb-10 mb-10">
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-1" checked="">
						<label class="custom-control-label" for="sidebaricon-1"><i class="fa fa-angle-down"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-2">
						<label class="custom-control-label" for="sidebaricon-2"><i class="ion-plus-round"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" class="custom-control-input" value="icon-style-3">
						<label class="custom-control-label" for="sidebaricon-3"><i class="fa fa-angle-double-right"></i></label>
					</div>
				</div>

				<h4 class="weight-600 font-18 pb-10">Menu List Icon</h4>
				<div class="sidebar-radio-group pb-30 mb-10">
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-1" name="menu-list-icon" class="custom-control-input" value="icon-list-style-1" checked="">
						<label class="custom-control-label" for="sidebariconlist-1"><i class="ion-minus-round"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-2" name="menu-list-icon" class="custom-control-input" value="icon-list-style-2">
						<label class="custom-control-label" for="sidebariconlist-2"><i class="fa fa-circle-o" aria-hidden="true"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-3" name="menu-list-icon" class="custom-control-input" value="icon-list-style-3">
						<label class="custom-control-label" for="sidebariconlist-3"><i class="dw dw-check"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-4" name="menu-list-icon" class="custom-control-input" value="icon-list-style-4" checked="">
						<label class="custom-control-label" for="sidebariconlist-4"><i class="icon-copy dw dw-next-2"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-5" name="menu-list-icon" class="custom-control-input" value="icon-list-style-5">
						<label class="custom-control-label" for="sidebariconlist-5"><i class="dw dw-fast-forward-1"></i></label>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input type="radio" id="sidebariconlist-6" name="menu-list-icon" class="custom-control-input" value="icon-list-style-6">
						<label class="custom-control-label" for="sidebariconlist-6"><i class="dw dw-next"></i></label>
					</div>
				</div>

				<div class="reset-options pt-30 text-center">
					<button class="btn btn-danger" id="reset-settings">Reset Settings</button>
				</div>
			</div>
		</div>
	</div>

	<div class="left-side-bar">
		<div class="brand-logo">
			<a href="/user_interface/index2.html">
				<img src="/user_interface/vendors/images/deskapp-logo.png" alt="" class="dark-logo">
				<img src="/user_interface/vendors/images/deskapp-logo - dark.png" alt="" class="light-logo">
			</a>
			<div class="close-sidebar" data-toggle="left-sidebar-close">
				<i class="ion-close-round"></i>
			</div>
		</div>
		<div class="menu-block customscroll">
			<div class="sidebar-menu">
				<ul id="accordion-menu">
					<li class="dropdown">
						<a href="/user_interface/index2.html" class="dropdown-toggle" id="dropdown-not">
							<span class="micon dw dw-house-1"></span><span class="mtext">Home</span>
						</a>
						<!-- <ul class="submenu">
							<li><a href="/user_interface/index2.html">Dashboard</a></li>
						</ul> -->
					</li>
					
					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-library"></span><span class="mtext">Storage</span>
						</a>
						<ul class="submenu">
							<li><a href="/user_interface/datatable.html">Files</a></li>
						</ul>
					</li>
					<li>
						<a href="/user_interface/calendar.html" class="dropdown-toggle no-arrow">
							<span class="micon dw dw-calendar1"></span><span class="mtext">Calendar</span>
						</a>
					</li>
					<li>
						<a href="/comunity.html" class="dropdown-toggle no-arrow">
							<span class="micon dw dw-user-11"></span><span class="mtext">Community</span>
						</a>
					</li>
					
					
					<li class="dropdown">
						<a href="javascript:;" class="dropdown-toggle">
							<span class="micon dw dw-help"></span><span class="mtext">HELP</span>
						</a>
						<ul class="submenu">
							<li><a href="#">Video Player</a></li>
							<!-- <li><a href="/user_interface/forgot-password.html">Forgot Password</a></li> -->
							<li><a href="/user_interface/reset-password.html">Reset Password</a></li>
						</ul>
					</li>
					
					
					<li>
						<a href="/user_interface/chat.html" class="dropdown-toggle no-arrow">
							<span class="micon dw dw-chat3"></span><span class="mtext">Chat</span>
						</a>
					</li>
					<li>
						<a href="/user_interface/subsmodel/index.html" class="dropdown-toggle no-arrow">
							<span class="micon dw dw-crown"></span><span class="mtext">Subscription</span>
						</a>
					</li>
					<!-- <li>
						<a href="/user_interface/invoice.html" class="dropdown-toggle no-arrow">
							<span class="micon dw dw-invoice"></span><span class="mtext">Invoice</span>
						</a>
					</li> -->
										
					
				</ul>
			</div>
		</div>
	</div>

        `
    }
}
customElements.define("user-navbar", l_Navbar);