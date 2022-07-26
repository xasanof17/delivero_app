export default {
   name: 'restaurant',
   title: 'Restaurant',
   type: 'document',
   fields: [
      {
         name: 'name',
         type: 'string',
         title: 'Restaurant name',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'sort_description',
         type: 'string',
         title: 'Short description',
         validation: (Rule) => Rule.max(200),
      },
      {
         name: 'image',
         type: 'image',
         title: 'Image of the Restaurant',
      },
      {
         name: 'lat',
         type: 'number',
         title: 'Latitude of the Restaurant',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'long',
         type: 'number',
         title: 'Longitude of the Restaurant',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'address',
         type: 'string',
         title: 'Restaurant address',
         validation: (Rule) => Rule.required(),
      },
      {
         name: 'rating',
         type: 'number',
         title: 'Enter a Rating from (1-5 Starts)',
         validation: (Rule) =>
            Rule.required()
               .min(1)
               .max(5)
               .error("Please enter a Value between 1 and 5"),
      },
      {
         name: 'type',
         type: 'reference',
         title: 'Category',
         validation: (Rule) => Rule.required(),
         to: [{ type: "category" }],
      },
      {
         name: 'dishes',
         type: 'array',
         title: 'Dishes',
         of: [{ type: "reference", to: [{ type: "dish" }] }],
      },
   ],
}
