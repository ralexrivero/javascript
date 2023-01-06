#!/usr/bin/env node

async function getRepos() {
  const requestURL = 'https://api.github.com/users/ralexrivero/repos';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const repos = await response.json();

  repos.forEach( (repo)=> {
    console.log(repo.name);
  });
}

getRepos();



"",
"100-days-of-code",
"Agile",
"AirBnB_clone",
"AirBnB_clone_v2",
"AirBnB_clone_v3",
"Angular",
"Artificial_intelligence",
"awk",
"base_convertion",
"BASH",
"binary_trees",
"bundlers",
"C",
"cloud",
"cpp",
"Django",
"EncuentraMe",
"Fix_My_Code_Challenge",
"flask",
"git",
"holberton-system_engineering-devops",
"holbertonschool-higher_level_programming",
"holbertonschool-interview",
"holbertonschool-low_level_programming",
"holbertonschool-machine_learning",
"holbertonschool-math",
"holbertonschool-zero_day",
"HTML-CSS101",
"java",
"",