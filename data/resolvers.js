import { Author, View, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      // return { id: 1, firstName: 'Hello', lastName: 'World' };
      return Author.find({ where: args });
    },
    allAuthors(_, args) {
      //return [{ id: 1, firstName: 'Hello', lastName: 'World' }];
      return Author.findAll();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    }
  },
  Author: {
    posts(author) {
      // return [
      //   { id: 1, title: 'A post', text: 'Some text', views: 2 },
      //   { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
      // ];
      return author.getPosts();
    }
  },
  Post: {
    author(post) {
      //return { id: 1, firstName: 'Hello', lastName: 'World' };
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then(view => view.views);
    }
  }
};

export default resolvers;
