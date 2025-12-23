const API = "https://todo-app-13bh.onrender.com";

const todoRoutes = require("./routes/todoRoutes");
const express = require("express");

async function loadTodos() {
	  const res = await fetch(API);
	  const todos = await res.json();

	  const list = document.getElementById("list");
	  list.innerHTML = "";

	  todos.forEach(todo => {
		      const li = document.createElement("li");
		      li.innerHTML = `
		            ${todo.title}
			          <button onclick="deleteTodo('${todo._id}')">❌</button>
				      `;
		      list.appendChild(li);
		    });
}

async function addTodo() {
	  const task = document.getElementById("task").value;
	  if (!task) return;

	  await fetch(API, {
		      method: "POST",
		          headers: { "Content-Type": "application/json" },
			      body: JSON.stringify({ title: task })
			        });

				  document.getElementById("task").value = "";
				    loadTodos();
				    }

				    async function deleteTodo(id) {
				      await fetch(`${API}/${id}`, { method: "DELETE" });
				        loadTodos();
					}

					loadTodos();


async function loadTodos() {
	  const res = await fetch(API);
	  const todos = await res.json();

	  const list = document.getElementById("list");
	  list.innerHTML = "";

	  todos.forEach(todo => {
		      const li = document.createElement("li");
		      li.innerHTML = `
		            ${todo.title}
			          <button onclick="deleteTodo('${todo._id}')">Delete</button>
				      `;
		      list.appendChild(li);
		    });
}

async function addTodo() {
	  const task = document.getElementById("task").value;
	  if (!task) return;

	  await fetch(API, {
		      method: "POST",
		      headers: { "Content-Type": "application/json" },
		      body: JSON.stringify({ title: task })
		    });

	  document.getElementById("task").value = "";
	  loadTodos();
}

async function deleteTodo(id) {
	  await fetch(`${API}/${id}`, {
		      method: "DELETE"
		    });
	  loadTodos();
}

loadTodos();

