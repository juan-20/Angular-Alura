# Em progresso....

## NgIf

<!-- se o has more n for false ele vai exibir o ng-template ali -->
<div class="text-center" *ngIf="hasMore; else messageTemplate">
  <button class="btn btn-primary">Load more</button>
</div>

<ng-template #messageTemplate>
  <p class="text-center text-muted">No more data to load</p>
</ng-template>

caminho:
C:\Programas\Alura\Angular\Alurapic\teste\Alurapic\web