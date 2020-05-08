import React from "react";

class Issues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      issues: []
    };
  }
  componentDidMount = () => {
    fetch("https://api.github.com/repos/octocat/Hello-World/issues")
      .then(res => res.json())
      .then(issues =>
        this.setState({
          issues: issues,
          isLoaded: true
        })
      );
  };

  render() {
    return (
      <div>
        <ul>
          {!this.state.isLoaded ? (
            <p>loading. Please wait...</p>
          ) : (
            this.state.issues.map(issue => (
              <li key={issue.id}>
                <article>
                  <p>
                    {issue.number} <h2>{issue.title}</h2>
                  </p>
                </article>
                Repository:{" "}
                <a href={issue.repository_url}>{issue.repository_url}</a>
                <br />
                Issue: <a href={issue.url}>{issue.url}</a>
                <p>{issue.user.login}</p>
                <strong>{issue.state}</strong>
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default Issues;
