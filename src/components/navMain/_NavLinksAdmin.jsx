import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const _NavLinksAdmin = (props) => {
	return (
		<div className="NavLinks">
			<ul className="flex-row sp-center">
				<li>
					<NavLink to="/admin/menu/update" className="nav-link">
						Modifier la carte
					</NavLink>
				</li>{" "}
				<li>
					<NavLink to="/admin/reservations" className="nav-link">
						Voir les réservations
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default withRouter(_NavLinksAdmin);
