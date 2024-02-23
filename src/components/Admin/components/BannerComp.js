import React from 'react'
import SwichButton from './SwichButton';
import BreadCrumb from './BreadCrumb';

function BannerComp() {

	// const activate = "https://localhost/activateBanner";
	// const deactivate = "https://localhost/deactivateBanner";

	return (
		<div className='w-5/6 nav-with-content bg-gray-100 overflow-auto'>
			<div className='Content_box m-4'>
				<div className="bg-white p-8 rounded-md w-full">
					<BreadCrumb name="Banners" link="/admin/banner/data" btnName="Add Banner" />
					<div>
						<div className="mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
							<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
								<table className="min-w-full leading-normal">
									<thead>
										<tr>
											<th
												className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider text-center">
												#
											</th>
											<th
												className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
												Image
											</th>
											<th
												className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
												Name
											</th>
											<th
												className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
												Status
											</th>
											<th
												className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
												Action
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap text-center">1</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<div className="flex items-center">
													<div className="flex-shrink-0 w-10 h-10">
														<img className="w-full h-full rounded-full"
															src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
															alt="" />
													</div>
												</div>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<p className="text-gray-900 whitespace-no-wrap">Admin</p>
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<SwichButton checked={true} />
											</td>
											<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
												<span
													className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
													<span aria-hidden
														className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
													<span className="relative">Activo</span>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerComp;