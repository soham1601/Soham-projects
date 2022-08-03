from rest_framework import serializers
from . models import fieldlabour
from . models import farmer


class fieldlabourSeralizer(serializers.ModelSerializer):

    class Meta:
        model=fieldlabour
        fields='__all__'


class farmerSeralizer(serializers.ModelSerializer):

    class Meta:
        model=farmer
        fields='__all__'



