from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import fieldlabour
from . serializers import fieldlabourSeralizer
from . models import farmer
from . serializers import farmerSeralizer


class employeeList(APIView):

    def get(self,request):
        employees1=fieldlabour.objects.all()
        serializer=fieldlabourSeralizer(employees1,many=True)
        return Response(employees1.data)

    def post(self):
        pass


class farmerList(APIView):

    def get(self,request):
        employees1=farmer.objects.all()
        serializer=farmerSeralizer(employees1,many=True)
        return Response(employees1.data)

    def post(self):
        pass
