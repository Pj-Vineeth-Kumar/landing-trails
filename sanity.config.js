import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas/index';

export default defineConfig({
  name: 'globalcodio',
  title: 'GlobalCodio',
  projectId: '7tnn1bql',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Blog Posts')
              .child(
                S.documentList()
                  .title('Blog Posts')
                  .filter('_type == "blogPost"')
                  .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
              ),
            S.listItem()
              .title('Authors')
              .child(S.documentList().title('Authors').filter('_type == "author"')),
            S.divider(),
            S.listItem()
              .title('Form Submissions')
              .child(
                S.documentList()
                  .title('Form Submissions')
                  .filter('_type == "formSubmission"')
                  .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
              ),
          ]),
    }),
  ],

  schema: { types: schemaTypes },
});
