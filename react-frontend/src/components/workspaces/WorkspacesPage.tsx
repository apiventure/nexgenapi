import { Link } from "react-router-dom";
import styles from "./workspaces.module.css";

const assignedWorkspaces = [
	{ id: "ws-001", name: "Growth APIs", role: "Editor" },
	{ id: "ws-002", name: "Order APIs", role: "Viewer" },
	{ id: "ws-003", name: "Reservation APIs", role: "Admin" },
];

const roleStyles = {
	Admin: { background: "#ffe8cc", color: "#7a4a00", border: "#ffd092" },
	Editor: { background: "#dff4ff", color: "#0a4b75", border: "#b6e6ff" },
	Viewer: { background: "#e8f8e8", color: "#1d5a1d", border: "#bce7bc" },
};

export default function WorkspacesView() {
	const buildRoleBadgeStyle = (workspaceRole: string) => {
		const roleStyle = roleStyles[workspaceRole] ?? { background: "#edf2f7", color: "#334155", border: "#d7e0ea" };

		return {
			"--role-bg": roleStyle.background,
			"--role-fg": roleStyle.color,
			"--role-border": roleStyle.border,
		} as React.CSSProperties;
	};

	return (
		<main className={styles.main}>
			<section className={styles.card}>
				<h1 className={styles.title}>
					Workspaces
				</h1>
				<p className={styles.subtitle}>
					Assigned to you. Keep your setup focused with one personal and one shared team workspace.
				</p>

				<section className={styles.list}>
					{assignedWorkspaces.map((workspace) => {
						const roleBadgeStyle = buildRoleBadgeStyle(workspace.role);

						return (
							<Link key={workspace.id} to="/api-playground" className={styles.link} >
								<article className={styles.item}>
									<div>
										<div className={styles.name}>{workspace.name}</div>
									</div>

									<span
										className={styles.roleBadge} style={roleBadgeStyle} >
										{workspace.role}
									</span>
								</article>
							</Link>
						);
					})}
				</section>
			</section>
		</main>
	);
}
