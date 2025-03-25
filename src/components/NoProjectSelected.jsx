import noProjectImage from '../assets/no-projects.png';
import PrimaryButton from './buttons/PrimaryButton.jsx';
import { H2 } from './text/Headers.jsx';
import Paragraph from './text/Paragraph.jsx';

export default function NoProjectSelected({ onStartAddProject }) {
  return <div className="mt-10 pt-4 text-center w-2/3">
    <img src={noProjectImage} alt="An empty task list" className="size-16 object-contain mx-auto" />
    <H2>No Project Selected</H2>
    <Paragraph>Selecte a project or get started with a new one.</Paragraph>
    <p className="mt-8">
      <PrimaryButton onClick={onStartAddProject}>Create a new Project.</PrimaryButton>
    </p>
  </div>
};
