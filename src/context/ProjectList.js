import ProjectItem from "./ProjectItem"

export default function ProjectList({getProjects, Delete}) {
    return getProjects.map((project) => {
        return <ProjectItem project={project} key={project.id} Delete={Delete} />
    })
}