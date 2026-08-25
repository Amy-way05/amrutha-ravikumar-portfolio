const groups = [
  {
    label: 'Languages & Data',
    items: ['Python', 'SQL', 'PostgreSQL', 'R', 'Excel'],
  },
  {
    label: 'ML & Statistics',
    items: ['Q-Learning', 'Markov Chains', 'Random Forest', 'XGBoost', 'Logistic Regression', 'GLM', 'LASSO', 'PCA', 'K-Means', 'ANOVA'],
  },
  {
    label: 'NLP',
    items: ['TF-IDF', 'Cosine Similarity', 'VADER', 'Text Mining'],
  },
  {
    label: 'Libraries',
    items: ['Pandas', 'NumPy', 'Scikit-learn', 'BeautifulSoup', 'Selenium', 'ggplot2', 'dplyr', 'Shiny'],
  },
  {
    label: 'Visualization & Tools',
    items: ['Tableau', 'Power BI', 'Plotly', 'Jupyter', 'Git', 'Databricks'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 section-glow-right">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="accent-line w-8" />
          <h2 className="font-display text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            Skills
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map((group, i) => (
            <div key={i} className={i === groups.length - 1 ? 'sm:col-span-2' : ''}>
              <h3 className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-wider">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, j) => (
                  <span key={j}
                    className="skill-tag text-sm px-3 py-1.5 rounded-lg text-slate-400 cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
                {group.items.map((item, j) => (
                  <span key={j}
                    className="skill-tag text-sm px-3 py-1.5 rounded-lg bg-surface border border-border text-text-secondary cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
