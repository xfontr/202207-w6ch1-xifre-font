import Task from "../../features/models/Task";

interface RestRepositoryType<T extends Task> {
  load: (id: string) => Promise<T>;
  loadAll: () => Promise<Array<T>>;
  add: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  delete: (id: T["id"]) => Promise<Response | unknown>;
}
class RestRepository<T extends Task> implements RestRepositoryType<T> {
  constructor(public url: string) {}

  load(id: string) {
    return fetch(this.url + id).then((response) => response.json());
  }

  async loadAll() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    } catch (error) {
      return "Error";
    }
  }

  async add(item: Partial<T>) {
    try {
      const response = await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    } catch (error) {
      return error;
    }
  }

  async update(item: Partial<T>) {
    try {
      const response = await fetch(this.url + item.id, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    } catch (error) {
      return error;
    }
  }

  async delete(id: T["id"]) {
    try {
      const response = await fetch(this.url + id, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error();
      }

      return response;
    } catch (error) {
      return error;
    }
  }
}

export default RestRepository;
