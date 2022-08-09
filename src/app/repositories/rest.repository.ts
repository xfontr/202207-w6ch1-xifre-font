import Task from "../../features/models/Task";

interface RestRepositoryType<T extends Task> {
  load: (id: string) => Promise<T>;
  loadAll: () => Promise<Array<T>>;
  add: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  delete: (id: T["id"]) => Promise<Response>;
}
class RestRepository<T extends Task> implements RestRepositoryType<T> {
  constructor(public url: string) {}

  load(id: string) {
    return fetch(this.url + id).then((response) => response.json());
  }

  async loadAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  add(item: Partial<T>) {
    return fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());
  }

  update(item: Partial<T>) {
    return fetch(this.url + item.id, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());
  }

  delete(id: T["id"]) {
    return fetch(this.url + id, {
      method: "DELETE",
    });
  }
}

export default RestRepository;
