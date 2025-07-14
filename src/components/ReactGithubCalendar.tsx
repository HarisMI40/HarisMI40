import GitHubCalendar from 'react-github-calendar';

// theme={{dark: ["var(--theme-accent)"], light: ["var(--theme-accent)"]}}

const x = [ "var(--theme-background)", "var(--theme-accent)"]
const theme = { light: x, dark: x }

export default function ReactGithubCalendar() {
  return (
    <div className="github-calendar my-6">
      <GitHubCalendar username="stelcodes" theme={theme}  />
    </div>
  );
}