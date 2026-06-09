import { useMemo } from 'react';
import SectionHeader from '../atoms/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import Button from '../atoms/Button';
import { projects } from '../../data/projects';
import styles from './styles/Projects.module.css';
import { ArrowLeft } from 'lucide-react';

const Projects = () => {
    // Orden personalizado de categorías
    const categoryOrder = [
        'Backend',
        'Full Stack',
        'AI / ML',
        'DevOps',
        'Frontend',
        'Desktop',
        'Automation',
        'CLI'
    ];

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
        // Ordenar según el array categoryOrder, luego agregar categorías no especificadas al final
        return uniqueCategories.sort((a, b) => {
            const indexA = categoryOrder.indexOf(a);
            const indexB = categoryOrder.indexOf(b);
            // Si no está en el orden personalizado, ponerlo al final
            return (indexA === -1 ? categoryOrder.length : indexA) - (indexB === -1 ? categoryOrder.length : indexB);
        });
    }, []);

    return (
        <section className={`section ${styles.projectsSection}`}>
        <div className="container">
            <div className={styles.header}>
            <div className={styles.headingWrapper}>
                <SectionHeader label="Portfolio" title="All Projects" />
            </div>
            <Button href="/#hero" variant="secondary" className={styles.backButton}>
                <ArrowLeft size={16} /> Back to Home
            </Button>
            </div>

            <div className={styles.content}>
            {categories.map(category => (
                <div key={category} className={styles.categoryGroup}>
                <h3 className={styles.categoryTitle}>{category}</h3>
                <div className={styles.grid}>
                    {projects
                    .filter(project => project.category === category)
                    .map(project => (
                        <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        url={project.url}
                        category={project.category}
                        />
                    ))}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
