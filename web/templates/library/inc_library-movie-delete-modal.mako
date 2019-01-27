<div id="deleteModal" class="modal fade" tabindex="-1">

    <div class="modal-dialog auto-width">

        <div class="modal-content">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h3 class="modal-title">Confirmation</h3>
            </div>

            <div v-if="movie" class="modal-body">
                <span>Are you sure you want to delete <b>{{ movie.title }}</b>?</span>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-default" @click="deleteMovie($event)">Delete</button>
            </div>

        </div>

    </div>

</div>