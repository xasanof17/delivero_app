export default {
   name: 'featured',
   title: 'Featured Menu Categtories',
   type: 'document',
   fields: [
      {
         name: 'name',
         type: 'string',
         title: 'Featured Category name',
         valigation: (Rule) => Rule.required(),
      },
      {
         name: 'short_description',
         type: 'string',
         title: 'Short description',
         valigation: (Rule) => Rule.required(),
      },
      {
         name: 'restaurants',
         type: 'array',
         title: 'Restaurants',
         of: [{ type: 'reference', to: [{ type: 'restaurant' }] }],
      },
   ],
};