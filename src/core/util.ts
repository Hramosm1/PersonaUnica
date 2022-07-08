export function getQueryFilter(queryParams: any): { AND: any[] } | undefined {
  if (Object.keys(queryParams).length > 0) {
    const filter: any[] = []
    for (const key in queryParams) {
      switch (key) {
        case 'nombre':
          filter.push({ PU_Nombres: { some: { nombre: { contains: queryParams[key] } } } })
          break;
        case 'documento':
          filter.push({ PU_Documentos: { some: { documento: { contains: queryParams[key] } } } })
          break;
        case 'primerApellido':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'segundoApellido':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'razonSocial':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'tipo':
          filter.push({ [key]: { equals: parseInt(queryParams[key]) } })
          break;
        default:
          break;
      }
    }
    return { AND: filter }
  } else {
    return undefined
  }
}