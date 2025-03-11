# Machine Specifications Component Refactoring

## Context
The current `machine-specifications.tsx` component has grown too large and handles specifications for three different machines (Chopping, Taping, and Wire Flattening) in a single file. This makes the code harder to maintain and understand.

## Decision
We will split the machine specifications component into smaller, more focused components using the following structure:

```
components/machines/specifications/
├── base-specification.tsx      # Shared layout and types
├── chopping-machine.tsx       # Chopping machine specific implementation
├── taping-machine.tsx         # Taping machine specific implementation
├── wire-machine.tsx          # Wire flattening machine specific implementation
└── image-carousel.tsx        # Shared image carousel component
```

### Component Responsibilities

1. **BaseSpecification**
   - Provides shared layout structure
   - Handles common styling and section structure
   - Defines TypeScript interfaces for specifications

2. **Machine-specific Components**
   - Implement machine-specific table structures
   - Handle machine-specific translations
   - Extend base specification component

3. **ImageCarousel**
   - Manages machine images display
   - Handles image navigation
   - Provides consistent image viewing experience

## Benefits

1. **Improved Maintainability**
   - Each machine's specifications are isolated
   - Changes to one machine don't affect others
   - Smaller, more focused components

2. **Better Code Organization**
   - Clear separation of concerns
   - Reusable shared components
   - Consistent structure across machines

3. **Enhanced Development Experience**
   - Easier to locate and modify machine-specific code
   - Reduced cognitive load when working with specifications
   - More intuitive component structure

## Technical Implementation

The refactoring will be implemented in the following steps:

1. Create base specification component with shared logic
2. Extract image carousel into separate component
3. Create individual machine specification components
4. Update imports and routes
5. Migrate existing translations and maintain structure

## Migration Strategy

1. Create new component structure
2. Implement new components alongside existing one
3. Switch machine pages to use new components one at a time
4. Remove old component once all machines are migrated

## Next Steps

Switch to Code mode to implement this refactoring, following the structure and approach outlined above.