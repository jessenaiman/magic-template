# Data Model: Consistent Design Page Layout & Customization

## Entities

### Design Page
- id: string
- title: string
- description: string
- customizationOptions: CustomizationOption[]
- previewTiles: PreviewTile[]

### PreviewTile
- id: string
- title: string
- componentName: string
- code: string
- customization: CustomizationOption[]

### CustomizationOption
- id: string
- label: string
- type: string (e.g., text, color)
- description: string
- defaultValue: any

### LayoutComponent
- id: string
- name: string
- appliesTo: DesignPage[]

## Relationships
- Each DesignPage uses one LayoutComponent
- Each DesignPage has many PreviewTiles
- Each PreviewTile has many CustomizationOptions
- CustomizationOptions are defined centrally in LayoutComponent and referenced by DesignPages

## Validation Rules
- All DesignPages must reference a LayoutComponent
- All PreviewTiles must have at least one CustomizationOption
- CustomizationOptions must have a defaultValue
