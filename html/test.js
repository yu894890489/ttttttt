<!--/. NAV TOP  -->
	         <nav id="sidebar" class="navbar-default navbar-side" role="navigation">
	            <div class="sidebar-collapse">
	                <ul class="nav" id="main-menu">
	
	                    <li>
	                        <a class="active-menu" href="home.html"><i class="fa fa-dashboard"></i> 首页</a>
	                    </li>
	                    <li v-for="key in yu">
	                    	<a href="{{key.url}}"><i class="{{key.icon}} fa fa-desktop"></i> {{key.name}}<span class="fa arrow"></span></a>
	                    		<ul v-if="key.children!=undefined" class="nav nav-second-level">
	                    			<li v-for="ke in key">
	                    				 <a href="#"><i v-if="ke.children!=undefined" class="{{ke.icon}}"></i>{{ke.name}}<span v-if="ke.children!=undefined" class="fa arrow"></span></a>
                            	 <ul v-if="ke.children!=undefined" class="nav nav-third-level">
                            	 	<li v-for="k in ke">
                            	 		<a href="{{k.url}}">k.name</a>
                            	 	</li>	
                            	 </ul>
                            </li>
	                    		</ul>
	                    </li>
	                    <li>
	                        <a href="#"><i class="icon-group fa fa-desktop"></i> 客户管理<span class="fa arrow"></span></a>
	                    		<ul class="nav nav-second-level">
	                            <li>
	                                <a href="#">新增</a>
	                            </li>
	                            <li>
	                                <a href="#">修改</a>
	                            </li>
	                            <li>
	                                <a href="#">查询</a>
	                            </li>
	                            <li>
	                                <a href="#">删除</a>
	                            </li>
	                        </ul>
	                    </li>
	                    <li>
	                        <a href="#"><i class="fa fa-sitemap"></i> 国内单笔保理<span class="fa arrow"></span></a>
	                        <ul class="nav nav-second-level">
	                            <li>
	                                <a href="#"><i class="icon-pencil"></i>登记<span class="fa arrow"></span></a>
	                                <ul class="nav nav-third-level">
	                                    <li>
	                                        <a href="#">申请</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">复核</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">退回处理</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">删除在途</a>
	                                    </li>
	
	                                </ul>
	                            </li>
	                             <li>
	                                <a href="#"><i class="icon-mail-forward"></i>转让<span class="fa arrow"></span></a>
	                                <ul class="nav nav-third-level">
	                                    <li>
	                                        <a href="#">申请</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">复核</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">退回处理</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">删除在途</a>
	                                    </li>
	
	                                </ul>
	                            </li>
	                             <li>
	                                <a href="#"><i class="icon-cny"></i>融资<span class="fa arrow"></span></a>
	                                <ul class="nav nav-third-level">
	                                    <li>
	                                        <a href="#">申请</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">复核</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">退回处理</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">删除在途</a>
	                                    </li>
	
	                                </ul>
	                            </li>
	                        		  <li>
	                                <a href="#"><i class="icon-credit-card"></i>付款<span class="fa arrow"></span></a>
	                                <ul class="nav nav-third-level">
	                                    <li>
	                                        <a href="#">申请</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">复核</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">退回处理</a>
	                                    </li>
	                                    <li>
	                                        <a href="#">删除在途</a>
	                                    </li>
	
	                                </ul>
	                            </li>
	                        </ul>
	                    </li>
	                	<li>
	                		<a href="#"><i class="icon-bar-chart fa fa-desktop"></i> 报表</a>
	                	</li>
	                </ul>
	
	            </div>
	
	        </nav>
	         	
	         <!-- /. NAV SIDE  -->