import React from "react"
import { Link } from "gatsby"
import { createLocalLink } from "../../utils"

import SHstyle from "./style.module.scss"


const HeaderMenu = () => {

	const menuItems = [
		{
			id: "Earth Hour 2020",
			label: "Earth Hour 2020",
			url: "/",
			childItems: null
		},
		{
			id: "Challenges",
			label: "Challenges",
			url: "/",
			childItems: [{
				id: 20,
				label: "Bring Wildlife Back",
				url: "/"
			}, {
				id: 21,
				label: "Protect Food Sources",
				url: "/"
			}, {
				id: 22,
				label: "Make Singapore Haze-Free",
				url: "/"
			}, {
				id: 23,
				label: "Keep Plastic Out Of Nature",
				url: "/"
			}]
		},
		{
			id: "About",
			label: "About",
			url: "/",
			childItems: [{
				id: 30,
				label: "About WWF",
				url: "/"
			}, {
				id: 31,
				label: "Contact Us",
				url: "/"
			}]
		}
	]

	// return <></>	

	return menuItems.map(menuItem => {
		return (

			menuItem.childItems ?
				<li
					className={`nav-item dropdown ${SHstyle.navItem} ${SHstyle.dropdown}`}
					key={menuItem.id}
				>
					<Link
						className={`nav-link px-3 px-lg-0 dropdown-toggle ${SHstyle.navLink} ${SHstyle.dropdownToggle}`}
						to={createLocalLink(menuItem.url)}
						title={menuItem.label}
						data-toggle="dropdown"
					>
						{menuItem.label}
					</Link>

					<div
						className={`dropdown-menu ${SHstyle.dropdownMenu}`}
						aria-labelledby="navbarDropdown"
					>
						{menuItem.childItems.map(item => {
									var { featureColor, featureIcon } = {}
										// item.connectedObject.campaignsTaxonomyFields || {}

									return (
										<Link
											key={item.id}
											className={`dropdown-item px-3 d-flex align-items-center ${SHstyle.dropdownItem}`}
											to={createLocalLink(item.url)}
											title={item.label}
											style={{
												color: featureColor || "",
											}}
										>
											{featureIcon ? (
												<img
													className="mr-2"
													style={{ width: "32px", height: "32px" }}
													srcSet={featureIcon.srcSet}
													src={featureIcon.sourceUrl}
													alt={featureIcon.altText}
												/>
											) : (
													""
												)}
											<span>{item.label}</span>
										</Link>
									)
								})}
					</div>
				</li>
				:
				<li className={`nav-item ${SHstyle.navItem}`} key={menuItem.id}>
					<Link
						title={menuItem.label}
						className={`nav-link px-3 px-lg-0 ${SHstyle.navLink}`}
						to={createLocalLink(menuItem.url)}
					>
						<div>{menuItem.label}</div>
					</Link>
				</li>

		)
	})


}

export default HeaderMenu
