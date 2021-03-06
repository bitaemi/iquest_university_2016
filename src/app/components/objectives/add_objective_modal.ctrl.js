(function() {
    'use strict';

    angular.module('marathon').controller('AddObjectiveController', ctrl);

    function ctrl(Objectives, member, owner, $uibModalInstance) {
        var vm = this;
        vm.owner = owner;
        vm.member = member;
        vm.memberId = member.id;

        vm.addObjective = function(owner, memberId, objective) {
            var data = {
                title: objective.title,
                ownerId: owner.id,
                memberId: memberId,
                descriptions: [
                    {
                        type: 'general',
                        text: objective.general
                    },
                    {
                        type: 'on target',
                        text: objective.onTarget
                    },
                    {
                        type: 'overachieved',
                        text: objective.overachieved
                    },
                    {
                        type: 'underachieved',
                        text: objective.underachieved
                    }
                ]
            };
            Objectives.create(data).then(function() {
                $uibModalInstance.close();
            });
        };

        vm.reset = function() {
            vm.objective = {};
        };

        vm.dismiss = function() {
            $uibModalInstance.dismiss();
        };

        vm.objectiveFields = Objectives.objectiveFields;
    }
})();
