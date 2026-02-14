# Pasta de Imagens do Portfolio

## Como adicionar suas imagens:

### Foto de Perfil (Avatar)
Coloque sua foto na pasta `profile/`:
```
images/
  profile/
    avatar.jpg    <-- Sua foto principal (recomendado: 500x500px)
```

### Imagens dos Projetos
Coloque os screenshots na pasta `projects/`:
```
images/
  projects/
    planilha.jpg     <-- Screenshot do projeto Planilha de Arquivos
    geografia.jpg    <-- Screenshot do projeto Geografia One
    matematica.jpg   <-- Screenshot do projeto Matematica
    certiseg.jpg     <-- Screenshot do projeto CertiSeg
    tarot.jpg        <-- Screenshot do projeto Carta de Tarot
```

### Formatos aceitos
- `.jpg`, `.jpeg`, `.png`, `.webp`

### Tamanhos recomendados
- **Avatar**: 500x500px (quadrado)
- **Projetos**: 800x500px (paisagem)

### Depois de adicionar as imagens:
Abra o `index.html` e edite o objeto `IMAGES` no inicio do `<script>`:

```javascript
const IMAGES = {
  avatar: 'images/profile/avatar.jpg',
  projectPlanilha: 'images/projects/planilha.jpg',
  projectGeografia: 'images/projects/geografia.jpg',
  projectMatematica: 'images/projects/matematica.jpg',
  projectCertiseg: 'images/projects/certiseg.jpg',
  projectTarot: 'images/projects/tarot.jpg',
};
```
